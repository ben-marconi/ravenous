const apiKey = 'FN3EkGJaAtuysc_QdXG-E8Xjt-Z8mEm1wtokpncS0Lh9f_VIZ9dwVDZawPyQ101j7tYXV_mSC09gcw3I4ZSpp6NmZmYejyAFts_pN5TUDg-fNj-6LzOSYpNLyTUXY3Yx';

export const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location==='' ? 'London' : location}&sort_by=${sortBy}`, {
            headers: {
              Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {return response.json()}).then(jsonResponse => {
            if (jsonResponse.businesses){
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                })
            }
        });
    }
}



