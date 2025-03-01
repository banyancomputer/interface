import { Children, cloneElement, FC, isValidElement } from 'react'

export interface Step {
  _index?: number
  _active?: boolean
  _last?: boolean
}

const Step: FC<Step> = ({ _index, _active, _last, children }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col">
        {Children.map(children, (child) => {
          if (isValidElement(child)) {
            //Note (amiller68) - #ReactIssue
            return cloneElement(child, {
              // @ts-ignore
              _index,
              _active,
              _last,
            })
          }

          return child
        })}
      </div>
    </div>
  )
}

export default Step
