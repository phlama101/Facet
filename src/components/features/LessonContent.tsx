interface Props { content: string }

function parseMarkdown(md: string): string {
  return md
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>[\s\S]+?<\/li>)/g, '<ul>$1</ul>')
    .replace(/\|(.+)\|/g, (m) => {
      const cells = m.split('|').filter(Boolean).map(c => c.trim())
      return `<tr>${cells.map(c => `<td>${c}</td>`).join('')}</tr>`
    })
    .replace(/(<tr>[\s\S]+?<\/tr>)/g, '<table>$1</table>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[htupla])(.+)$/gm, '$1')
}

export default function LessonContent({ content }: Props) {
  const paragraphs = content.split('\n\n')

  return (
    <div className="lesson-prose space-y-4">
      {paragraphs.map((block, i) => {
        if (block.startsWith('## ')) {
          return <h2 key={i}>{block.slice(3)}</h2>
        }
        if (block.startsWith('### ')) {
          return <h3 key={i}>{block.slice(4)}</h3>
        }
        if (block.startsWith('| ')) {
          const rows = block.split('\n').filter(r => r.startsWith('|') && !r.match(/^\|[-\s|]+\|$/))
          const [header, ...body] = rows
          const headerCells = header.split('|').filter(Boolean).map(c => c.trim())
          return (
            <table key={i}>
              <thead><tr>{headerCells.map(c => <th key={c}>{c}</th>)}</tr></thead>
              <tbody>
                {body.map((row, ri) => (
                  <tr key={ri}>{row.split('|').filter(Boolean).map((c, ci) => <td key={ci}>{c.trim()}</td>)}</tr>
                ))}
              </tbody>
            </table>
          )
        }
        const lines = block.split('\n')
        const isListBlock = lines.every(l => l.startsWith('- '))
        if (isListBlock) {
          return (
            <ul key={i}>
              {lines.map((l, li) => {
                const text = l.slice(2)
                const parts = text.split(/(\*\*[^*]+\*\*)/g)
                return (
                  <li key={li}>
                    {parts.map((p, pi) =>
                      p.startsWith('**') ? <strong key={pi}>{p.slice(2, -2)}</strong> : p
                    )}
                  </li>
                )
              })}
            </ul>
          )
        }
        const parts = block.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g)
        return (
          <p key={i}>
            {parts.map((part, pi) => {
              if (part.startsWith('**') && part.endsWith('**')) return <strong key={pi}>{part.slice(2, -2)}</strong>
              if (part.startsWith('*') && part.endsWith('*')) return <em key={pi}>{part.slice(1, -1)}</em>
              return part
            })}
          </p>
        )
      })}
    </div>
  )
}
