import React from 'react'
import { Button, Icon } from '@material-ui/core'
import { domToImage } from '../../utlis/domToImage'
import { createStyles, makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(() =>
  createStyles({
    button: {
      paddingLeft: 20,
      paddingRight: 20,
      '& .MuiIcon-root': {
        marginRight: 15
      }
    }
  })
)

interface IType {
  id: string,
  text: string
}

const types: IType[] = [
  { id: 'jpeg', text: 'JPG' },
  { id: 'png', text: 'PNG' }
]

type Props = {
  htmlDivElementRef: React.MutableRefObject<HTMLDivElement>
  backgroundColor: string
}
const ButtonList:React.FC<Props> = ({ htmlDivElementRef, backgroundColor }) => {
  const classes = useStyles()
  const handleClick = (type: IType) => {
    domToImage(htmlDivElementRef.current, type.id, backgroundColor)
  }

  return (
    <React.Fragment>
      {types.map((type: IType) => (
        <Button 
          key={type.id}
          onClick={() => handleClick(type)}
          className={classes.button}
          size="small"
        >
          <Icon fontSize="inherit">vertical_align_bottom</Icon>
          Download {type.text} 
        </Button>
      ))}
    </React.Fragment>
  )
}

export default ButtonList
