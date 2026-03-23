# 🚀 Deploy no Easypanel (VPS)

## Pré-requisitos
- VPS com Docker e Easypanel instalados.
- Repositório do projeto no GitHub (ou GitLab).

---

## Opção 1: Stack via docker-compose.yml (Recomendado)

1. No Easypanel, clique em **Create Resource → Stack**.
2. Cole o conteúdo do `docker-compose.yml` ou aponte para o repositório Git.
3. Na aba **Env** do Stack, adicione as variáveis abaixo:

| Variável | Descrição |
|---|---|
| `JWT_SECRET` | Chave secreta para JWT (gere com `openssl rand -hex 32`) |
| `POSTGRES_DB` | Nome do banco (ex: `wpcrm`) |
| `POSTGRES_USER` | Usuário do banco (ex: `wpcrm_user`) |
| `POSTGRES_PASSWORD` | Senha do banco (use uma senha forte) |
| `EVOLUTION_API_URL` | URL completa da sua Evolution API |
| `EVOLUTION_API_KEY` | Chave da Evolution API |
| `ADMIN_EMAIL` | E-mail para criação do primeiro acesso de Admin |
| `ADMIN_PASSWORD` | Senha inicial para a conta Admin |

4. Clique em **Deploy**.
5. Configure um **domínio** na aba **Domains** apontando para a porta `3008`.

---

## Opção 2: App separado (App + serviço Postgres do Easypanel)

1. No Easypanel, crie um serviço **PostgreSQL** e copie a `DATABASE_URL`.
2. Crie um **App** apontando para o repositório Git.
3. Na aba **Env** do App, adicione as variáveis da tabela acima **mais**:

| Variável | Valor |
|---|---|
| `DATABASE_URL` | A connection string copiada do serviço Postgres |

4. Configure a porta **3008** e o domínio desejado.

---

## Webhook da Evolution API

Após o deploy, configure o webhook da Evolution API para apontar para:

```
https://SEU_DOMINIO/api/webhooks/evolution
```

Os eventos necessários são: `messages.upsert`, `send.message`.

---

## Verificação

Acesse `https://SEU_DOMINIO/api/health` — deve retornar `{"status": "ok"}`.
