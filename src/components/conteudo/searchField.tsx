import style from './SearchField.module.css'

export default function searchField(
    props:{
        darkMode:boolean,
        setSearchBox: any,
        searchBox:string,
        alternarOrdem,
        alternarOrdem2
    }):JSX.Element{
    
    let container = `${style.container}`

    if(props.darkMode === true){
        container = `${style.containerBlack}`
    }else{
        container = `${style.container}`
    }

    return (
        <div className={container}>
            <input 
                className={style.search}
                placeholder='Procurar'
                type='search' 
                value={props.searchBox} 
                onChange={e => props.setSearchBox(e.target.value)}
            />
            <nav id={style.menu}>
                <input type='checkbox' id='responsive-menu' /><label></label>
                <ul>
                    <li><a className={style.dropdownArrow}>Classificar por:</a>
                        <ul className={style.subMenus}>
                            <li><a onClick={props.alternarOrdem}>Mais recentes</a></li>
                            <li><a onClick={props.alternarOrdem2}>Mais antigas</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    )
}