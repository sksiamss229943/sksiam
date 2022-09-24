import React from "react"

const Progress = ({ color, color_name, width }) => {
  return (
    <div>
      <div className={`mb-1 text-base font-medium`}>{color_name}</div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
        <div
          className={`${color} h-2.5 rounded-full`}
          style={{ width: `${width}` }}
        />
      </div>
    </div>
  )
}

export default Progress
