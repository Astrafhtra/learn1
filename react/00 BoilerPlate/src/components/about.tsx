import * as React from 'react';
import '../css/site.css'

// 无状态的表示型组件
// React.StatelessComponent必须有返回值
export const About:React.StatelessComponent = () => {
  return (
    <div className="row">
      <h2>Application Header</h2>
    </div>
  )
}