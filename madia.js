

var Quotes = [
    {Author:`― Oscar Wilde`  , quote:`“Be yourself; everyone else is already taken.”` },
    {Author:`― Frank Zappa`  , quote:`“So many books, so little time.”` },
    {Author:`― Albert Einstein`  , quote:`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”` },
    {Author:`― Marcus Tullius Cicero`  , quote:`“A room without books is like a body without a soul.”` },
    {Author:`― Bernard M. Baruch`  , quote:`“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”` },
    {Author:`― William W. Purkey`  , quote:`“You've gotta dance like there's nobody watching,Love like you'll never be hurt, Sing like there's nobody listening,And live like it's heaven on earth.”` },
    {Author:`― Dr. Seuss`  , quote:`“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”` },
    {Author:`― Mae West`  , quote:`“You only live once, but if you do it right, once is enough.”` },
    {Author:`― Mahatma Gandhi`  , quote:`“Be the change that you wish to see in the world.”` },
    {Author:`― Robert Frost`  , quote:`“In three words I can sum up everything I've learned about life: it goes on.”` },
    {Author:`― J.K. Rowling, Harry Potter and the Goblet of Fire`  , quote:`“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”` },
    {Author:`― Albert Camus`  , quote:`“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”` },
    {Author:`― Mark Twain`  , quote:`“If you tell the truth, you don't have to remember anything.”` },
    {Author:`― C.S. Lewis, The Four Loves`  , quote:`“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”` },
    {Author:`― Maya Angelou`  , quote:`“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”` },
    {Author:`― Elbert Hubbard`  , quote:`“A friend is someone who knows all about you and still loves you.”` },
    {Author:`― Oscar Wilde`  , quote:`“To live is the rarest thing in the world. Most people exist, that is all.”` },
    {Author:`― Oscar Wilde`  , quote:`“Always forgive your enemies; nothing annoys them so much.”` },
    {Author:`― Martin Luther King Jr.` , quote:`“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”` },
    {Author:`― Mahatma Gandhi`  , quote:`“Live as if you were to die tomorrow. Learn as if you were to live forever.”` },
    {Author:`― Stephen Chbosky, The Perks of Being a Wallflower`  , quote:`“We accept the love we think we deserve.”` },
    {Author:`― Friedrich Nietzsche, Twilight of the Idols`  , quote:`“Without music, life would be a mistake.”` },
    {Author:`― Oscar Wilde, The Happy Prince and Other Stories`  , quote:`“I am so clever that sometimes I don't understand a single word of what I am saying.”` },
    {Author:`― Ralph Waldo Emerson`  , quote:`“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”` },
    {Author:`― Narcotics Anonymous`  , quote:`“Insanity is doing the same thing, over and over again, but expecting different results.”` },
    {Author:`― Andre Gide, Autumn Leaves`  , quote:`“It is better to be hated for what you are than to be loved for what you are not.”` },
    {Author:`― Jane Austen, Northanger Abbey`  , quote:`“The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.”` },
    {Author:` J.K. Rowling, `  , quote:`“It is our choices, Harry, that show what we truly are, far more than our abilities.”` },
    {Author:`― Marilyn Monroe`  , quote:`“Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring.”` },
    {Author:`― Albert Einstein`  , quote:`“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”` },
    {Author:`― Mark Twain`  , quote:`“Good friends, good books, and a sleepy conscience: this is the ideal life.”` },
    {Author:`― John Green`  , quote:`“As he read, I fell in love the way you fall asleep: slowly, and then all at once.”` },
    {Author:`― Oscar Wilde`  , quote:`“We are all in the gutter, but some of us are looking at the stars.”` },
    {Author:`― Neil Gaiman, Coraline`  , quote:`“Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten.”` },
    {Author:`― William Shakespeare`  , quote:`“The fool doth think he is wise, but the wise man knows himself to be a fool.”` },
    {Author:`― Maurice Switzer, Mrs. Goose, Her Book`  , quote:`“It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.”` },
    {Author:`― Mark Twain`  , quote:`“Whenever you find yourself on the side of the majority, it is time to reform (or pause and reflect).”` },
    {Author:`― Allen Saunders`  , quote:`“Life is what happens to us while we are making other plans.”` },
    {Author:`― Bill Keane`  , quote:`“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”` },
    {Author:`― Thomas A. Edison`  , quote:`“I have not failed. I've just found 10,000 ways that won't work.”` },
    {Author:`― Friedrich Nietzsche`  , quote:`“It is not a lack of love, but a lack of friendship that makes unhappy marriages.”` },
    {Author:`― Mark Twain`  , quote:`“The man who does not read has no advantage over the man who cannot read.”` },
    {Author:`― Eleanor Roosevelt`  , quote:`“A woman is like a tea bag; you never know how strong it is until it's in hot water.”` },
    {Author:`― douglas adams, The Long Dark Tea-Time of the Soul`  , quote:`“I may not have gone where I intended to go, but I think I have ended up where I needed to be.”` },
    {Author:`― Gordon A. Eadie`  , quote:`“If you don't stand for something you will fall for anything.”` },
    {Author:`― Groucho Marx, The Essential Groucho: Writings For By And About`  , quote:`“Outside of a dog, a book is man's best friend. Inside of a dog it's too dark to read.”` },
    {Author:`― J.K. Rowling`  , quote:`“I solemnly swear that I am up to no good.”` },
    {Author:`― Dr. Seuss`  , quote:`“I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.”` },
  

]
var randomNumber = Math.floor(
    Math.random() * Quotes.length);
function generatRandomNumber(x) {
    return Math.floor(Math.random() * Quotes.length)
}




var button = document.getElementById('btn')
button.onclick = function () {
    var randomNumber = generatRandomNumber(Quotes.length)
    var y = Quotes[randomNumber].quote

    var quote = document.getElementById('domo')
    quote.innerHTML = y

    var r = Quotes[randomNumber].Author
    var Author = document.getElementById('Author')
    Author.innerHTML = r
   
}