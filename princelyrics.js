function getRandomName()
{
    var names = [
        'Act your age, mama (not your shoe size)',
        'Dream if you can a courtyard; an ocean of violets in bloom; animals strike curious poses; They feel the heat; The heat between me and you',
        'Girl, you got an ass like I've never seen; And the ride, I say the ride is so smooth; You must be a limosine',
        'I just want your creamy thighs',
    ];

    return names[Math.floor(Math.random() * names.length)];
}

document.write( getRandomName() );
