const frames = [
  { emoji: '🏺', cap: 'pottery',      sub: 'throwing plates' },
  { emoji: '🧵', cap: 'embroidery',   sub: '& sewing'        },
  { emoji: '🏂', cap: 'snowboarding', sub: ''                },
  { emoji: '🐕', cap: 'finn',         sub: '(my dog)'        },
]

export default function OfflineSection() {
  return (
    <>
      <h2 id="offline"><span className="hash">##</span> offline</h2>
      <p>things I love:</p>
      <div className="photo-strip">
        {frames.map(({ emoji, cap, sub }) => (
          <div key={cap} className="photo-frame">
            <span className="photo-emoji">{emoji}</span>
            <span className="photo-cap">{cap}<br />{sub}</span>
          </div>
        ))}
      </div>
    </>
  )
}
