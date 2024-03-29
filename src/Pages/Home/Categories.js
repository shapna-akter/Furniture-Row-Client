import { useQuery } from '@tanstack/react-query';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-jet.vercel.app/categories')
            const data = res.json();
            return data;
        }
    });

    return (
        <div className='flex flex-col justify-center items-center'>
            <>
                <div className='text-center my-12'>
                    <h2 className='font-bold text-2xl text-[#67AD5C] mb-2'>Products category</h2>
                    <p className='text-sm font-semibold'>See what's in stock in each of these categories.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4'>
                    {
                        categories?.map(category => <CategoryCard
                            key={category._id}
                            category={category}
                        ></CategoryCard>)
                    }
                </div>
            </>
        </div>
    );
};

export default Categories;