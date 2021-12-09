export default function convert(md) {
  const parsed = md.split(/^([A-Z][A-Za-z]*): /gm).filter(s => s !== "")
  const results = []
  for (let i = 0; i < parsed.length; i += 2) {
    results.push({ speaker: parsed[i], text: parsed[i + 1] })
  }
  return results
}
