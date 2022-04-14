
import { getCategory } from '../lib/api'


const Category = () => {
  


  return (
    <div>
      <h3>Catogory</h3>
    </div>
  )
}

export default Category


export async function getStaticProps() {

  const all = getCategory()

}