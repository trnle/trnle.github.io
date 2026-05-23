import Image from 'next/image'

interface Props {
  onClick: () => void
  /** Pass src + alt for a Next.js Image, or plain: true to use <img> */
  thumb: { src: string; alt: string; plain?: boolean } | null
  title: React.ReactNode
  tags: string[]
  description: string
  links?: React.ReactNode
}

export default function ProjectCard({ onClick, thumb, title, tags, description, links }: Props) {
  return (
    <div className="proj-card" onClick={onClick}>
      <div className="proj-thumb" style={{ position: 'relative' }}>
        {thumb ? (
          thumb.plain ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumb.src}
              alt={thumb.alt}
              style={{
                position: 'absolute', inset: 0,
                width: '100%', height: '100%',
                objectFit: 'cover', objectPosition: 'top',
                display: 'block',
              }}
            />
          ) : (
            <Image
              src={thumb.src}
              alt={thumb.alt}
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          )
        ) : (
          <div className="ph-thumb" style={{ position: 'absolute', inset: 0 }}>no image</div>
        )}
      </div>

      <div className="proj-body">
        <div className="proj-title">{title}</div>
        <div className="proj-tags">
          {tags.map(t => <span key={t} className="chip">{t}</span>)}
        </div>
        <p className="proj-desc">{description}</p>
        {links && <div className="proj-links">{links}</div>}
      </div>
    </div>
  )
}
