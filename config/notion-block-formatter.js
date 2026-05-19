function briefToNotionBlocks(briefText) {
  const blocks = [];

  for (const rawLine of briefText.split('\n')) {
    const line = rawLine.trimEnd();

    if (!line.trim()) continue;

    if (line.startsWith('## ')) {
      blocks.push({
        object: 'block',
        type: 'heading_2',
        heading_2: {
          rich_text: [{ type: 'text', text: { content: line.slice(3).trim() } }]
        }
      });
    } else if (line.match(/^[-*] /)) {
      blocks.push({
        object: 'block',
        type: 'bulleted_list_item',
        bulleted_list_item: {
          rich_text: [{ type: 'text', text: { content: line.slice(2).trim() } }]
        }
      });
    } else {
      blocks.push({
        object: 'block',
        type: 'paragraph',
        paragraph: {
          rich_text: [{ type: 'text', text: { content: line.trim() } }]
        }
      });
    }
  }

  return blocks;
}

module.exports = { briefToNotionBlocks };

// --- test ---
const sample = `
## This Week's Take
Fast-casual competition is heating up as all four brands push digital and loyalty plays simultaneously.

## Cava
Cava announced a new loyalty tier offering free protein upgrades.
- App downloads up 18% MoM after the campaign launch
- Mediterranean cuisine category searches hit a 12-month high

## Sweetgreen
Sweetgreen continued its Infinite Kitchen rollout in the Northeast.
- Two new automated locations opened in Boston and Philadelphia
- Labor cost reduction cited as primary driver

## Chipotle
Chipotle faced supply chain scrutiny after an avocado shortage impacted guacamole availability.
* Social media sentiment dipped 6% week-over-week
* CFO addressed the issue on an investor call Friday

## Shake Shack
Shake Shack launched a limited summer menu with three new LTOs.
- Truffle ShackBurger sold out in 48 hours at test locations

## Watch List
- Monitor Chipotle's guac supply recovery and any menu price adjustments
- Track Sweetgreen's Infinite Kitchen unit economics as more locations come online
- Watch for Cava loyalty program copycats from competitors
`;

const blocks = briefToNotionBlocks(sample);
console.log(JSON.stringify(blocks, null, 2));
console.log(`\nTotal blocks: ${blocks.length}`);
