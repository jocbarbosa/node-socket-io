const getCurrentDateTime = () => {
    const now = Date.now();

    console.log(new Intl.DateTimeFormat('pt-BR', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'

    }).format(now));
}

export { getCurrentDateTime };