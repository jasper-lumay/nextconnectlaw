import { PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function VideoComingSoon() {
  return (
    <div className="video-coming-soon">
      <span className="video-coming-soon__icon" aria-hidden="true">
        <PlayCircle size={28} />
      </span>
      <h2 className="video-coming-soon__title">Video Insights</h2>
      <p className="video-coming-soon__desc">
        Educational videos and legal explainers will be added here as they become available.
      </p>
      <Badge notice>Coming Soon</Badge>
    </div>
  );
}
