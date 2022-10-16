import { ReactNode } from "react"
import { SectionTitleContainer, TitleContaine } from "./styles"

interface TextCheckProps{
  title: string
  subtitle: string
  icon: ReactNode
}

export function TextCheck({title,subtitle,icon}: TextCheckProps){
  return(
    <SectionTitleContainer>
      {icon}
      <div>
        h1{title}
        {subtitle}
      </div>
    </SectionTitleContainer>
  )
}