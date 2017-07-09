module.exports = {
    aor: {
        action: {
            delete: 'Deletar',
            show: 'Exibir',
            list: 'Listar',
            save: 'Salvar',
            create: 'Novo',
            edit: 'Editar',
            cancel: 'Cancelar',
            refresh: 'Atualizar',
            add_filter: 'Adicionar Filtro',
            remove_filter: 'Cancelar filtro',
        },
        boolean: {
            true: 'Sim',
            false: 'Não',
        },
        page: {
            list: 'Listar %{name}',
            edit: '%{name} #%{id}',
            show: '%{name} #%{id}',
            create: 'Novo %{name}',
            delete: 'Deletar %{name} #%{id}',
            dashboard: 'Painel de Controle'
        },
        input: {
            image: {
                upload_several: 'Arraste alguns arquivos para fazer o upload ou clique para selecionar arquivo',
                upload_single: 'Arraste um arquivo para upload ou clique em selecionar arquivo.',
            },
        },
        message: {
            yes: 'Sim',
            no: 'Não',
            are_you_sure: 'Tem certeza?',
            about: 'Sobre',
        },
        navigation: {
            no_results: 'Nenhum resultado encontrado',
            page_out_of_boundaries: 'Página %{page} fora o limite',
            page_out_from_end: 'Não é possível ir após a última página',
            page_out_from_begin: 'Não é possível ir antes da primeira página',
            page_range_info: '%{offsetBegin}-%{offsetEnd} de %{total}',
            next: 'Próximo',
            prev: 'Anterior',
            no_results: 'Nenhum resultado encontrado'
        },
        auth: {
            username: 'Usuário',
            password: 'Senha',
            sign_in: 'Logar',
            sign_in_error: 'Erro na autenticação, tente novamente.',
            logout: 'Sair',
        },
        notification: {
            updated: 'Item atualizado com sucesso',
            created: 'Item criado com sucesso',
            deleted: 'Item removido com sucesso!',
            item_doesnt_exist: 'Esse item não existe mais',
            http_error: 'Erro na comunicação com servidor',
        },
        validation: {
            required: 'Obrigatório',
            minLength: 'Deve ser ter no mínimo %{min} caracteres',
            maxLength: 'Deve ter no máximo %{max} caracteres',
            minValue: 'Deve ser %{min} ou maior',
            maxValue: 'Deve ser %{max} ou menor',
            number: 'Deve ser um número',
            email: 'Deve ser um email válido',
        },
    },
};