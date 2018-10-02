
export const customdata = {
    fieldDescriptions: {
        dateStart: {
            heading: 'Дата начала проекта',
            description: 'Дата (если нет понимания по конкретной дате, укажите только месяц и год), когда вы планируете начать реализацию вашего проекта.',
            type: 'tooltip',
            // type: 'dialog',
        },
        town: {
            heading: 'Регион',
            description: 'Выберите из раскрывающегося списка регион, в котором вы планируете реализовать Ваш проект.\n' +
                'Ваш выбор будет влиять на подходы к оценке затрат, уровень конкуренции и рентабельность деятельности.\n' +
                'Данная модель учитывает основные различия между макрорегионами, не принимая во внимание, что бизнес-среда в некоторых городах одного макрорегиона может существенно отличаться. Если вы хотите учесть локальные особенности ведения бизнеса в интересующем вас регионе, то рекомендуем Вам обратиться в ПАО Сбербанк за услугой "НЭП" (https://www.sberbank.ru/ru/s_m_business/bankingservice/rko/expertise).\n',
            // type: 'tooltip',
            type: 'dialog',
        },
        businessArea: {
            heading: 'Направление деятельности',
            description: 'Мы предусмотрели для Вас несколько наиболее востребованных направлений реализации инвестиционных проектов. В зависимости от выбранного вида деятельности, структура ваших затрат может существенно отличаться (например, у парикмахерской не возникнут сущесвтенные транспортные расходы, такие как у как у компании-грузоперевозчика). Если в предложенном списке Вы не нашли подходящий для Вашего проекта ид деятельности, выберите наиболее близкое нарпавление. Для получения кастомизированных и подробных расчетов по проекту Вы также можете обратиться в ПАО Сбербанк за услугой НЭП (https://www.sberbank.ru/ru/s_m_business/bankingservice/rko/expertise).',
            // type: 'tooltip',
            type: 'dialog',
        },
        taxMode: {
            heading: 'Система налогообложения',
            description: 'Режим налогообложения определяет, какими налогами и по какой ставке будет облагаться проект. В основном, крупные предприятия использую общую систему налогообложения (ОСН), подразумевающую уплату НДС, налога на прибыль, на имущество организаций.\n' +
                'Для малого бизнеса характерно использование трех основных режимов налогообложения: \n' +
                '1. УСН (она же - упрощенная система налогообложения), подходит для компаний с выручкой менее 60 млн. руб., небольшой численностью персонала (до 100 человек) и небольшой суммой активов (не более 100 млн. руб.). Предлагается льготная ставка и освобождение от уплаты части налогов.\n' +
                '2. ЕНВД (для организаций и ИП), Патент (только для ИП) - может использоваться только для ограниченного перечня видов деятельности (например, для парикмахерских и иных бытовых услуг, пассажирских перевозок, автостоянок). Преимущество - он же и недостаток - фиксированный платеж,  зависящий не от показателей деятельности (прибыли и выручки), а от вида деятельности.\n' +
                '3. ЕСХН - этот режим налогообложения применим только для сельскохозяйственных предприятий, представляет условия, более льготные, чем УСН.\n' +
                '\n' +
                'NB: Налоговая система РФ может меняться, сведения приведены по состоянию на 01.04.18 г. \n' +
                '\n' +
                'ВАЖНО: Не забывайте, пожалуйста, что это упрощенная модель, которая не учитывает все возможности (например, льготы) Налогового кодекса РФ. Если Вас интересует детальный расчет, или Вы планируете реализовывать проект на площадках экономических зон и зон опережающего развития, где действуют льготы по налогам и аренде земли, то вы можете воспользоваться услугой НЭП в ПАО Сбербанк (https://www.sberbank.ru/ru/s_m_business/bankingservice/rko/expertise).\n',
            // type: 'tooltip',
            type: 'dialog',
        },
        existingAssets: {
            heading: 'Имеющиеся активы',
            description: 'Инвестиции подразумевают капитальные вложения, например, приобретение зданий и оборудования для будущего проекта. Это сумма всех планируемых вами затрат на реализацию проекта.',
            // type: 'tooltip',
            type: 'dialog',
        },
    }
}

