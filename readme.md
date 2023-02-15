
## Documentação da API
### Status

```http
  [GET] /
```


#### Retorna:

```json
{
    "error":0,
    "msg":"API Ativa"
}

```

### Checa um Nick

```http
[POST] /api/v1/checker
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `nick`      | `string` | **Obrigatório**. O Nick a ser checado |
| `region`      | `string` | **Obrigatório**. A região para checar |

Retorna ✅ : 

```json
{
	"error": 0,
	"msg": "Seiku estará disponível em 901 dias.",
	"nickname": "Seiku"
}
```

Except ❌ : 

Caso algum parâmetro não seja enviado ou seja enviado de forma inválida, retorna o seguinte erro: 

```json
{
	"error": 1,
	"msg": "Corpo da requisição inválido."
}
```

# Fim
Obrigado por ler até aqui! Em caso de dúvidas ou erros, sinta-se a vontade para abrir uma Issue ou me mandar uma mensagem pelo meu discord.

![Kyubey](https://media4.giphy.com/media/13VFATn4bxBCXm/giphy.gif)