import { useRef } from "react"

function Header(){
	let container=useRef()
	return(
		
		<header>
			<div ref={container} className="container">	
				
			</div>
		</header>
	)
}

function crateP(elem){

}


export default Header