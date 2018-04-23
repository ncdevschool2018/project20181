package by.netcracker.converters;

import by.netcracker.entities.AccountEntity;
import by.netcracker.models.AccountViewModel;
import org.springframework.core.convert.converter.Converter;

public class AccountEntityToAccountViewModelConverter implements Converter<AccountEntity, AccountViewModel> {
    @Override
    public AccountViewModel convert(AccountEntity accountEntity) {
        AccountViewModel accountViewModel = new AccountViewModel();
        accountViewModel.setIdAccount(String.valueOf(accountEntity.getId()));
        accountViewModel.setFirstname(accountEntity.getFirstname());
        accountViewModel.setLastname(accountEntity.getLastname());
        accountViewModel.setPatronymic(accountEntity.getPatronymic());

        return accountViewModel;
    }
}
