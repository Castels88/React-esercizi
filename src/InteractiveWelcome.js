import { Welcome } from "./Welcome"
import react from react
export class InteractiveWelcome extends react.component{

    render(){
        return (
            <div>
                <input type="text"  />
                <Welcome/>
            </div>
        )
    }
}