export type Category = {
  title: string
  description: string
  to: string
}

const categories: Category[] = [
  {
    title: "LIFE",
    description: "삶에 대한 학습 기록",
    to: "/life",
  },
  {
    title: "DEV",
    description: "개발 학습 기록",
    to: "/dev",
  },
]

export default categories
