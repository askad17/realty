document.addEventListener('DOMContentLoaded', function() {
            // Элементы формы
            const regionSelect = document.getElementById('region');
            const incomeInput = document.getElementById('income');
            const propertyPriceInput = document.getElementById('property-price');
            const downPaymentInput = document.getElementById('down-payment');
            const calculateBtn = document.getElementById('calculate-btn');
            
            // Элементы результатов
            const interestRateEl = document.getElementById('interest-rate');
            const monthlyPaymentEl = document.getElementById('monthly-payment');
            const loanAmountEl = document.getElementById('loan-amount');
            
            // Функция форматирования чисел
            function formatNumber(num) {
                return new Intl.NumberFormat('ru-RU').format(num);
            }
            
            // Функция расчета ипотеки
            function calculateMortgage() {
                // Получаем значения из формы
                const propertyPrice = parseFloat(propertyPriceInput.value) || 0;
                const downPayment = parseFloat(downPaymentInput.value) || 0;
                const region = regionSelect.value;
                
                // Проверяем, что первоначальный взнос не больше стоимости
                if (downPayment > propertyPrice) {
                    alert('Первоначальный взнос не может превышать стоимость недвижимости');
                    return;
                }
                
                // Рассчитываем сумму кредита
                const loanAmount = propertyPrice - downPayment;
                
                // Определяем процентную ставку в зависимости от региона
                let interestRate;
                switch(region) {
                    case 'moscow':
                        interestRate = 0.12; // 12%
                        break;
                    case 'spb':
                        interestRate = 0.13; // 13%
                        break;
                    case 'other':
                        interestRate = 0.15; // 15%
                        break;
                    default:
                        interestRate = 0.29; // 29% по умолчанию
                }
                
                // Рассчитываем ежемесячный платеж (упрощенная формула)
                const monthlyRate = interestRate / 12;
                const loanTerm = 20 * 12; // 20 лет в месяцах
                
                let monthlyPayment;
                if (interestRate > 0) {
                    monthlyPayment = loanAmount * 
                        (monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / 
                        (Math.pow(1 + monthlyRate, loanTerm) - 1);
                } else {
                    monthlyPayment = loanAmount / loanTerm;
                }
                
                // Обновляем результаты
                interestRateEl.textContent = `${(interestRate * 100).toFixed(0)}%`;
                monthlyPaymentEl.textContent = `${formatNumber(Math.round(monthlyPayment))} ₽`;
                loanAmountEl.textContent = `${formatNumber(Math.round(loanAmount))} ₽`;
            }
            
            // Обработчики событий
            calculateBtn.addEventListener('click', calculateMortgage);
            
            // Автоматический расчет при изменении значений
            [incomeInput, propertyPriceInput, downPaymentInput, regionSelect].forEach(input => {
                input.addEventListener('input', calculateMortgage);
            });
            
            // Инициализация расчета
            calculateMortgage();
        });

document.querySelectorAll('.accordion-header').forEach(header => {
            header.addEventListener('click', () => {
                const item = header.parentElement;
                const isActive = item.classList.contains('active');
                
                // Закрываем все открытые элементы
                document.querySelectorAll('.accordion-item').forEach(otherItem => {
                    otherItem.classList.remove('active');
                });
                
                // Открываем текущий, если он не был активен
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });