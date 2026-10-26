"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { ChevronDown } from "lucide-react";

const TYPEAHEAD_RESET_MS = 600;

/**
 * Accessible custom dropdown — the standard select control for this site.
 * Renders a hidden `<input type="hidden">` so it still submits through
 * ordinary form actions/FormData like a native `<select>`, but the visible
 * trigger + listbox are fully custom-styled. Use this instead of a native
 * `<select>` anywhere on the site.
 */
export function Select({
  id,
  name,
  options,
  placeholder = "Select one",
  defaultValue = "",
  invalid,
  describedById,
}: {
  id: string;
  name: string;
  options: string[];
  placeholder?: string;
  defaultValue?: string;
  invalid?: boolean;
  describedById?: string;
}) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const [activeIndex, setActiveIndex] = useState(() => Math.max(0, options.indexOf(defaultValue)));
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const typeaheadRef = useRef("");
  const typeaheadTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const listboxId = `${id}-listbox`;

  function close() {
    setOpen(false);
  }

  function selectValue(option: string) {
    setValue(option);
    setActiveIndex(options.indexOf(option));
    close();
    triggerRef.current?.focus();
  }

  useEffect(() => {
    if (!open) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        close();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  useEffect(() => {
    return () => clearTimeout(typeaheadTimeoutRef.current);
  }, []);

  function jumpToTypeahead(char: string) {
    clearTimeout(typeaheadTimeoutRef.current);
    typeaheadRef.current += char.toLowerCase();
    const match = options.findIndex((option) => option.toLowerCase().startsWith(typeaheadRef.current));
    if (match >= 0) {
      setActiveIndex(match);
      if (!open) {
        selectValue(options[match]);
      }
    }
    typeaheadTimeoutRef.current = setTimeout(() => {
      typeaheadRef.current = "";
    }, TYPEAHEAD_RESET_MS);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    switch (event.key) {
      case "ArrowDown":
        event.preventDefault();
        if (!open) {
          setOpen(true);
        } else {
          setActiveIndex((index) => Math.min(options.length - 1, index + 1));
        }
        return;
      case "ArrowUp":
        event.preventDefault();
        if (!open) {
          setOpen(true);
        } else {
          setActiveIndex((index) => Math.max(0, index - 1));
        }
        return;
      case "Home":
        if (open) {
          event.preventDefault();
          setActiveIndex(0);
        }
        return;
      case "End":
        if (open) {
          event.preventDefault();
          setActiveIndex(options.length - 1);
        }
        return;
      case "Enter":
      case " ":
        event.preventDefault();
        if (open) {
          selectValue(options[activeIndex]);
        } else {
          setOpen(true);
        }
        return;
      case "Escape":
        if (open) {
          event.preventDefault();
          close();
        }
        return;
      case "Tab":
        close();
        return;
      default:
        if (event.key.length === 1 && /\S/.test(event.key)) {
          jumpToTypeahead(event.key);
        }
    }
  }

  return (
    <div className="ui-select" ref={rootRef}>
      <input type="hidden" name={name} value={value} />
      <button
        ref={triggerRef}
        id={id}
        type="button"
        className={`ui-select__trigger${invalid ? " ui-select__trigger--error" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listboxId}
        aria-describedby={describedById}
        onClick={() => setOpen((isOpen) => !isOpen)}
        onKeyDown={handleKeyDown}
      >
        <span className={value ? "ui-select__value" : "ui-select__placeholder"}>
          {value || placeholder}
        </span>
        <ChevronDown className="ui-select__chevron" data-open={open} aria-hidden="true" />
      </button>

      <ul
        id={listboxId}
        role="listbox"
        className="ui-select__listbox"
        data-open={open}
        aria-activedescendant={open ? `${id}-option-${activeIndex}` : undefined}
      >
        {options.map((option, index) => (
          <li
            key={option}
            id={`${id}-option-${index}`}
            role="option"
            aria-selected={option === value}
            className={`ui-select__option${index === activeIndex ? " ui-select__option--active" : ""}${
              option === value ? " ui-select__option--selected" : ""
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onClick={() => selectValue(option)}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}
