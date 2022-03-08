const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = newSchema({
    id: Number,
    organization_id: String,
    type: String,
    species: String,
    breeds: {
        primary: String,
        secondary: String,
        mixed: Boolean,
        unknown:Boolean
    },
    colors: {
        primary: String,
        secondary: String,
        tertiary: String
    },
    age: String,
    gender: String,
    size: String,
    coat: String,
    attributes: {
        spayed_neutered: Boolean,
        house_trained: Boolean,
        declawed: Boolean,
        special_needs: Boolean,
        shots_current: Boolean
    },
    environment: {
        children: Boolean,
        dogs: Boolean,
        cats: Boolean,
    },
    tags: [
        "Cute",
        "Intelligent",
        "Large",
        "Playful",
        "Happy",
        "Affectionate"
    ],
    name: String,
    description: String,
    photos: [{
        small: String,
        medium: String,
        large: String,
        full: String,
    }],
    status: String,
    published_at: String,
    contact: {
        email:String,
        address:{
            email: String,
            phone: String,
            address: String,
            city: String,
            state: String,
            postcode: String,
            country: String
        }
    },
    links:{
        self: {
            href: String
         },
         type: {
             href: String
         },
         organization: {
             href: String
         }
    },
    pagination: {
        count_per_page: Number,
        total_count: Number,
        current_page: Number,
        total_pages: Number,
        _links: {
            previous: {
                href: String,
            },
            next: {
                href: String
            }
        }
    }
});