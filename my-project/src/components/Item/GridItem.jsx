 
 
 
import Product from './Product';
 
import WorkTitle from './WorkTitle';
 
 

const productsData = [
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
  { id: 1, titile: 'Build UI for onboarding flow', text: '0 of 3 substasks' },
 
];

const GridItem = () => {


  return (
    <div className="container mx-auto p-4">
     
      
      <div className="">
         <WorkTitle />
        <div className="">
          <h1 className="text-2xl font-bold mb-4">Shopping App</h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2">
            {productsData.map((product) => (
              <Product key={product.id} product={product}  />
            ))}
          </div>
        </div>
         
      </div>
    </div>
  );
};

export default GridItem;
