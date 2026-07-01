// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Get reference to the HTML element
    const quoteTextElement = document.getElementById("quote-text");

    // Array of quotes
const quotes = [
"Education is the most powerful weapon which you can use to change the world." - Nelson Mandela,
"The function of education is to teach one to think intensively and to think critically. Intelligence plus character &#8211; that is the goal of true education." - Martin Luther King Jr.,
"The best teachers are those who show you where to look but don't tell you what to see." - Alexandra K. Trenfor,
"Education is not the filling of a pail, but the lighting of a fire." - William Butler Yeats,
"Tell me and I forget. Teach me and I remember. Involve me and I learn." - Benjamin Franklin,
"Education is not preparation for life; education is life itself." - John Dewey,
"The more that you read, the more things you will know. The more that you learn, the more places you'll go." - Dr. Seuss,
"The beautiful thing about learning is that no one can take it away from you." - B.B. King,
"Education is the key to unlock the golden door of freedom." - George Washington Carver,
"Have the best day available to you." - Eric Unangst,
"Teaching is the one profession that creates all other professions." - Unknown,
"The art of teaching is the art of assisting discovery." - Mark Van Doren,
"Education is not received. It is achieved." - Albert Einstein,
"The goal of education is not to increase the amount of knowledge but to create the possibilities for a child to invent and discover." - Jean Piaget,
"A teacher affects eternity; he can never tell where his influence stops." - Henry Adams,
"The best way to predict the future is to create it." - Abraham Lincoln,
"Education is not just about going to school and getting a degree. It's about widening your knowledge and absorbing the truth about life." - Shakuntala Devi,
"The only person who is educated is the one who has learned how to learn and change." - Carl Rogers,
"Education is the passport to the future, for tomorrow belongs to those who prepare for it today." - Malcolm X,
"Education is not about filling a bucket, but lighting a fire." - W.B. Yeats,
"A good teacher can inspire hope, ignite the imagination, and instill a love of learning." - Brad Henry,
"The object of education is to prepare the young to educate themselves throughout their lives." - Robert M. Hutchins,
"Education breeds confidence. Confidence breeds hope. Hope breeds peace." - Confucius,
"Learning is not attained by chance; it must be sought for with ardor and attended to with diligence." - Abigail Adams,
"Education is the foundation upon which we build our future." - Christine Gregoire,
"The best education is not given to students; it is drawn out of them." - Gerald Belcher,
"Education is the movement from darkness to light." - Allan Bloom,
"Education is the most powerful weapon we can use to change the world." - Nelson Mandela,
"The purpose of education is to replace an empty mind with an open one." - Malcolm Forbes,
"In learning, you will teach, and in teaching, you will learn." - Phil Collins,
"Teaching is the greatest act of optimism." - Colleen Wilcox,
"To teach is to learn twice." - Joseph Joubert,
"Education is not the answer to the question. Education is the means to the answer to all questions." - William Allin,
"Education's purpose is to replace an empty mind with an open one." - Malcolm S. Forbes,
"The more I learn, the more I realize how much I don't know." - Albert Einstein,
"Education is the foundation upon which we build our future." - Christine Gregoire,
"Education is the key to unlock the golden door of freedom." - George Washington Carver,
"The best teachers are those who show you where to look but don't tell you what to see." - Alexandra K. Trenfor,
"Education is the ability to listen to almost anything without losing your temper or your self-confidence." - Robert Frost,
"Education is not the filling of a pail, but the lighting of a fire." - William Butler Yeats,
"The teacher who is indeed wise does not bid you to enter the house of his wisdom but rather leads you to the threshold of your mind." - Kahlil Gibran,
"Education is a continual process, it's like a bicycle... If you don't pedal you don't go forward." - George Weah,
"Education is what remains after one has forgotten what one has learned in school." - Albert Einstein,
"The whole purpose of education is to turn mirrors into windows." - Sydney J. Harris,
"The best way to predict your future is to create it." - Abraham Lincoln,
"Education is not received. It is achieved." - Albert Einstein,
"Teaching kids to count is fine, but teaching them what counts is best." - Bob Talbert,
"An investment in knowledge pays the best interest." - Benjamin Franklin,
"Education is not preparation for life; education is life itself." - John Dewey,
"To teach is to touch a life forever." - Unknown,
"The more I learn, the more I realize how much I don't know." - Albert Einstein,
    // Add more quotes here
    ];

    // Function to display a random quote
    function displayRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        quoteTextElement.textContent = randomQuote;
    }

    // Display a random quote when the page loads
    displayRandomQuote();
});