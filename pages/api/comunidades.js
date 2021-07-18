const { SiteClient } = require("datocms-client");


export default async function recebedorDeRequest(resquest, response) {

    if (resquest.method === 'POST') {

        const DATO_API_TOKEN = 'e7a12770d99634f7dbd9daafd42dc2';
        const client = new SiteClient(DATO_API_TOKEN);
        const registerCreated = await client.items.create({
            itemType: "976512",
            ...resquest.body,
        //    title: "comunidade_teste",
         //   imageUrl: "https://miro.medium.com/max/1400/1*HPpqmy_oTz4X08WEQTRRiw.jpeg",
        //    creatorSlug: "VINICIOMIRANDA"
        })

        console.log('DATO_API_TOKEN', DATO_API_TOKEN)
        console.log('REsQUEST', resquest.body)
        response.json({
            dados: 'Algum dado',
            registerCreated: registerCreated,
        })

        return;
    }

    response.status(404).json({
        message: 'Ainda não temos nenhuma informação!'

    })

}