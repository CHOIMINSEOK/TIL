export interface Category {
  title: string
  description: string
  to: string
}

var categories: Category[] = [
  {
    title: "LIFE",
    description: "삶에 대한 학습 기록",
    to: "/detail",
  },
  {
    title: "DEV",
    description: "개발 학습 기록",
    to: "/detail",
  },
]

export default categories
