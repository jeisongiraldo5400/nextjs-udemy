import { FC, PropsWithChildren } from "react"

export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: '20px',
      borderRadius: '5px'
    }}>
      <h3>Dark-layout</h3>
      <div>
        { children }
      </div>
    </div>
  )
}
