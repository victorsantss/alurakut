import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {
  if (request.method === 'POST') {
    const TOKEN = 'dd823578af73db1563024036d2d794'
    const client = new SiteClient(TOKEN)

    const registroCriado = await client.items.create({
      itemType: "973892", // ID do Model de "Communities" no DatoCMS
      ...request.body
    })

    response.json({
      dados: 'Algum dado qualquer',
      registroCriado: registroCriado
    })
    return
  }
}