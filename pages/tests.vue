<template>
    <div>
        <h2>Immagine Caricata in public/images:</h2>
        <img src="/images/immagine_test.png" alt="Immagine Caricata in public">
        <p>La cartella "public" contiene risorse statiche che verranno copiate direttamente nella radice del progetto
            durante il processo di build. Le immagini collocate nella cartella "public" non vengono elaborate o ottimizzate
            da Nuxt.js. Sono accessibili direttamente dal browser senza che Nuxt.js intervenga. Questo è utile quando si
            desidera mantenere le immagini nel loro formato originale senza alcuna elaborazione o se si desidera utilizzare
            URL statici per le immagini (ad esempio, se le immagini sono ospitate su un server esterno). Le immagini nella
            cartella "public" saranno accessibili tramite il percorso radice del progetto, ad esempio
            "/immagini/nome-immagine.jpg".</p>
    </div>

    <div>
        <h2>Immagine Caricata in assets/images</h2>
        <img src="~/assets/images/immagine_test.png " alt="">
        <p>La cartella "assets" è destinata a contenere risorse statiche che devono essere elaborate da Nuxt.js durante il
            processo di build. Le immagini collocate nella cartella "assets" vengono ottimizzate, ridimensionate e gestite
            automaticamente da Nuxt.js. Questo è utile quando si desidera utilizzare le immagini in modo dinamico nel codice
            del progetto Nuxt.js, ad esempio come background di un componente o per visualizzare le immagini dinamicamente
            in base ai dati del backend. Le immagini nella cartella "assets" saranno gestite da Webpack durante il processo
            di build e incluse nei bundle generati.</p>
    </div>
</template>