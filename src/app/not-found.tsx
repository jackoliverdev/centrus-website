import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 pt-36 pb-24 text-center">
      <h1 className="text-4xl font-bold mb-6 text-foreground">404 - Page Not Found</h1>
      <p className="text-xl text-muted-foreground mb-8">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link 
        href="/" 
        className="py-2 px-6 bg-primary text-white rounded-md hover:bg-primary/90"
      >
        Return to Home
      </Link>
    </div>
  );
}