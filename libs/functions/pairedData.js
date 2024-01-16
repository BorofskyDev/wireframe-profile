// import { heroContentData } from "../data/heroContentData"

// export const pairedData = []
// for (let i = 0; i < heroContentData.length; i += 2) {
//     pairedData.push({
//         title: heroContentData[i].title,
//         content: heroContentData[i + 1]?.content,
//     })
// }

export const heroContentData = [
  {
    type: 'title',
    content: 'Design',
  },
  {
    type: 'content',
    content:
      'Skilled in web design, Figma, and accessibility principles, I design user-centric websites that drive sales and enhance customer engagement',
  },
  {
    type: 'title',
    content: 'Develop',
  },
  {
    type: 'content',
    content:
      'With a stack that includes Next.js, SCSS, TailwindCSS, and more, I develop dynamic, high-performing websites',
  },
  {
    type: 'title',
    content: 'Adapt',
  },
  {
    type: 'content',
    content:
      'I am used to working in a fast-pace, ever-changing industry. Learning, taking advice, working with others, and adapting to new points of view are all part of my process',
  },
  {
    type: 'title',
    content: 'Sales',
  },
  {
    type: 'content',
    content:
      'A background in financial sales, I bring a unique business perspective to development, understanding the sales need behind the code',
  },
  {
    type: 'title',
    content: 'Support',
  },
  {
    type: 'content',
    content:
      'With over two decades in customer support, I understand consumer pressure points, enabling me to design and build websites that effectively engage and satisfy users',
  },
  {
    type: 'title',
    content: 'Dedicated',
  },
  {
    type: 'content',
    content:
      "I bring a soft skillset that will immediately benefit any company, and I'm dedicated to learning and growing as a developer",
  },
]

export const pairedData = []
for (let i = 0; i < heroContentData.length; i += 2) {
  pairedData.push({
    title: heroContentData[i].content,
    content: heroContentData[i + 1]?.content,
  })
}
