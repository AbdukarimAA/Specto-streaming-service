import mongoose, { Schema, model, connect } from 'mongoose';

const movieReviewSchema = new Schema<IMovieReview>({
    movieId: {type: String, required: true},
    userId: {type: String, required: true},
    title: {type: String, required: true},
    desc: {type: String, required: true},
    stars: {type: Number, required: true, enum: [1, 2, 3, 4, 5]},
}, {timestamps: true});

export interface IMovieReview extends mongoose.Document{
    id: string,
    movieId: string,
    userId: string,
    title: string,
    desc: string,
    stars: number,
    _doc?: any
}

export default mongoose.model('movieReview', movieReviewSchema);


