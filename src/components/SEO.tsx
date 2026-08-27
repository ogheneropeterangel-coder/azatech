import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function SEO({ title, description }: { title: string; description: string }) {
  const location = useLocation();

  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDesc) ogDesc.setAttribute('content', description);
    window.scrollTo(0, 0);
  }, [title, description, location]);

  return null;
}