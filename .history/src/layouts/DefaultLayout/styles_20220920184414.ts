import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  /* o height antes estava com calc(100vh - 10rem), porem eu tirei pois nao estava comportando a tabela dentro */
  height: 100%;
  margin: 5rem auto;
  padding: 2.5rem;

  
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
