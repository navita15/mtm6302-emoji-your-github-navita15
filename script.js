document.addEventListener('DOMContentLoaded', () => {
    const emojis = [
        { code: '&#128516;', decimal: '128516' },
        { code: '&#128520;', decimal: '128520' },
        { code: '&#128518;', decimal: '128518' },
        { code: '&#128514;', decimal: '128514' },
        { code: '&#128521;', decimal: '128521' },
        { code: '&#128515;', decimal: '128515' },
        { code: '&#128516;', decimal: '128516' },
        { code: '&#128523;', decimal: '128523' },
        { code: '&#128517;', decimal: '128517' },
        { code: '&#128519;', decimal: '128519' },
        { code: '&#128513;', decimal: '128513' },
        { code: '&#128522;', decimal: '128522' },
        { code: '&#8986;', decimal: '8986' },
        { code: '&#8987;', decimal: '8987' },
        { code: '&#9193;', decimal: '9193' },
        { code: '&#9194;', decimal: '9194' },
        { code: '&#9195;', decimal: '9195' },
        { code: '&#9196;', decimal: '9196' },
        { code: '&#9200;', decimal: '9200' },
        { code: '&#9203;', decimal: '9203' },
        { code: '&#9810;', decimal: '9810' },
        { code: '&#9811;', decimal: '9811' },
        { code: '&#9855;', decimal: '9855' },
        { code: '&#9889;', decimal: '9889' },
        { code: '&#9898;', decimal: '9898' },
        { code: '&#9899;', decimal: '9899' },
        { code: '&#9917;', decimal: '9917' },
        { code: '&#9918;', decimal: '9918' },
        { code: '&#9924;', decimal: '9924' },
        { code: '&#9925;', decimal: '9925' },
        { code: '&#9934;', decimal: '9934' },
        { code: '&#9940;', decimal: '9940' },
        { code: '&#9962;', decimal: '9962' },
        { code: '&#9970;', decimal: '9970' },
        { code: '&#9971;', decimal: '9971' },
        { code: '&#9973;', decimal: '9973' },
        { code: '&#9977;', decimal: '9977' },
        { code: '&#9978;', decimal: '9978' },
        { code: '&#9981;', decimal: '9981' },
        { code: '&#9989;', decimal: '9989' },
        { code: '&#10060;', decimal: '10060' },
        { code: '&#10062;', decimal: '10062' },
        { code: '&#10067;', decimal: '10067' },
        { code: '&#10068;', decimal: '10068' },
        { code: '&#10069;', decimal: '10069' },
        { code: '&#10071;', decimal: '10071' },
        { code: '&#10133;', decimal: '10133' },
        { code: '&#11093;', decimal: '11093' }
    ];

    const emojiGallery = document.getElementById('emoji-gallery');

    emojis.forEach(emoji => {
        const emojiItem = document.createElement('div');
        emojiItem.classList.add('emoji-item');
        emojiItem.innerHTML = `
            <span>${emoji.code}</span>
            <code>${emoji.decimal}</code>
        `;
        emojiGallery.appendChild(emojiItem);
    });
});