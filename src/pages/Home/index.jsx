import {Link} from 'react-router-dom'
import {Button} from '../../components/Button' 
const Home = () =>
{
  return 
  (<>
    <h1>Home</h1>
    <Button title={'teste 1'} />
    <Link to='/login'>Ir para o Login</Link>

    </> )
}

export {Home}