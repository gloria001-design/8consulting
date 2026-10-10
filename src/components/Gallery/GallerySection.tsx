import "../style/GallerySection.css";
import { bootcampPhotos } from "./GalleryPhotos";

export interface GalleryPhoto {
  /** Image path or URL, e.g. "/gallery/photo.jpg" */
  src: string;
  /** Alt text for screen readers */
  alt: string;
  /** Wide (3:2) tile. Omit for the regular (11:10) tile. */
  wide?: boolean;
  /** CSS object-position for the crop, e.g. "50% 30%" */
  objectPosition?: string;
}

export interface GallerySectionProps {
  /** Defaults to the bootcamp photos in GalleryPhotos.ts */
  photos?: GalleryPhoto[];
  /** How many photos per row (default 3) */
  perRow?: number;
  /** Optional heading above the grid */
  title?: string;
  /** Optional paragraph under the heading */
  description?: string;
  className?: string;
}

function chunk<T>(items: T[], size: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) rows.push(items.slice(i, i + size));
  return rows;
}

const GallerySection: React.FC<GallerySectionProps> = ({
  photos = bootcampPhotos,
  perRow = 3,
  title,
  description,
  className = "",
}) => {
  if (photos.length === 0) return null;

  const rows = chunk(photos, Math.max(1, perRow));

  return (
    <section className={`gallery ${className}`.trim()}>
      <div className="gallery__inner">
        {(title || description) && (
          <header className="gallery__header">
            {title && <h2 className="gallery__title">{title}</h2>}
            {description && <p className="gallery__lead">{description}</p>}
          </header>
        )}

        <div className="gallery__rows">
          {rows.map((row, r) => (
            <div className="gallery__row" key={r}>
              {row.map((photo, c) => (
                <div
                  key={`${photo.src}-${r}-${c}`}
                  className={`gallery__item${photo.wide ? " gallery__item--wide" : ""}`}
                >
                  <img
                    className="gallery__img"
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    style={{ objectPosition: photo.objectPosition }}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;