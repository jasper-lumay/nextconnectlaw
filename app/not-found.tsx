import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section section--surface">
      <Container>
        <div className="u-text-center u-max-w-prose">
          <h1>Page not found</h1>
          <p className="u-mt-md">
            The page you are looking for doesn&rsquo;t exist or may have moved.
          </p>
          <div className="u-mt-md">
            <Button href="/" variant="primary">
              Return home
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
