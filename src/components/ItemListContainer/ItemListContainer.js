import ItemCount from "../ItemCount/ItemCount.js"

let containerStyles={
    textAlign: 'center',
    fontFamily: 'sans-serif',
    fontWeight: 'bolder',
    borderColor: 'black',
    borderStyle: 'double',
    backgroundColor: 'grey',
    fontSize: 'larger'
}    

export default function ItemListContainer({greeting}) {
    return (
        <div style={containerStyles}>
            {greeting}
            <ItemCount/>
        </div>
    )
}