import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import Spinner from '../../Components/Spinner/Spinner';
import BookingModal from '../BookingModal/BookingModal';
import SingleCard from './SingleCard';

const CategoryDetails = () => {
    const details = useLoaderData();
    const [bookFurniture, setBookFurniture] = useState(null);
    // console.log(details);

    const navigation = useNavigation();
    if(navigation.state === 'loading') {
        return <Spinner></Spinner>
    }

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-12'>
                {
                    details?.map(detail => <SingleCard
                        detail={detail}
                        key={detail._id}
                        setBookFurniture={setBookFurniture}
                    ></SingleCard>)
                }
            </div>
            {
                bookFurniture &&
                <BookingModal
                    bookFurniture={bookFurniture}
                    setBookFurniture={setBookFurniture}
                ></BookingModal>
            }
        </div>
    );
};

export default CategoryDetails;