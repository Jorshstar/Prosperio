import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Enter name of product']
    },
    category: {
        type: String,
        required: [true, 'Enter category of product']
    },
    price: {
        type: Number,
        required: [true, 'Product must have a price']
    },
    quantity: {
        type: Number,
        required: [true, 'Enter the quantity of product available']
    },
    description: String,
    photo : String,
    value: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

productSchema.pre('save', function (next) {
    // Use the current value of quantity if price is provided
    if (this.isModified('price') && !this.isModified('quantity')) {
        this.value = this.price * this.quantity;
    }
    // Use the current value of price if quantity is provided
    else if (!this.isModified('price') && this.isModified('quantity')) {
        this.value = this.price * this.quantity;
    }
    // Use both fields if both are modified
    else {
        this.value = this.price * this.quantity;
    }
    next();
});

const Product = mongoose.model('Product', productSchema);

export default Product;