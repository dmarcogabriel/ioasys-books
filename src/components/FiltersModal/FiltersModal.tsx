import React, {useState} from 'react';
import RNModal from 'react-native-modal';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import styles, {
  FiltersModalContainer,
  FiltersModalHeader,
  CloseButtonWrapper,
  FilterButton,
  FilterButtonText,
  FiltersModalFooter,
} from './styles';
import {FiltersChips, Option} from './components';
import {CATEGORY} from './filtersDictionary';

export interface FiltersModalProps {
  isVisible: boolean;
  onClose: (filters?: any) => void;
  yearOptions: string[];
  categoryOptions: string[];
  authorOptions: string[];
}

interface FiltersState {
  category: string | null;
  year: string | null;
  author: string | null;
}

type FieldName = 'category' | 'year' | 'author';

export const FiltersModal = ({
  isVisible,
  yearOptions = [],
  categoryOptions = [],
  authorOptions = [],
  onClose,
}: FiltersModalProps): JSX.Element => {
  const [filters, setFilters] = useState<FiltersState>({
    category: null,
    year: null,
    author: null,
  });
  const handleClose = (filtersData?: FiltersState) => {
    onClose(filtersData || null);
  };

  const handleChange = (fieldName: FieldName) => (option: string) => {
    if (filters[fieldName] === option) {
      setFilters({...filters, [fieldName]: null});
    } else {
      setFilters({...filters, [fieldName]: option});
    }
  };

  const defineOptions = (
    options: string[],
    dictionary?: {[key: string]: string},
  ): Option[] => {
    return options.map(option => ({
      name: dictionary ? dictionary[option] : option,
      value: option,
    }));
  };

  return (
    <RNModal
      testID="filtersModal"
      style={styles.modal}
      isVisible={isVisible}
      onBackdropPress={() => handleClose()}>
      <FiltersModalContainer>
        <FiltersModalHeader>
          <CloseButtonWrapper
            testID="closeButton"
            onPress={() => handleClose()}>
            <MIcon name="close" size={24} />
          </CloseButtonWrapper>
        </FiltersModalHeader>
        <FiltersChips
          testID="Category"
          title="Selecione a categoria"
          options={defineOptions(categoryOptions, CATEGORY)}
          value={filters.category}
          onChange={handleChange('category')}
        />
        <FiltersChips
          testID="Year"
          title="Selecione o ano"
          options={defineOptions(yearOptions)}
          value={filters.year}
          onChange={handleChange('year')}
        />
        <FiltersChips
          testID="Author"
          title="Selecione o autor"
          options={defineOptions(authorOptions)}
          value={filters.author}
          onChange={handleChange('author')}
        />
        <FiltersModalFooter>
          <FilterButton
            testID="filterButton"
            onPress={() => handleClose(filters)}>
            <FilterButtonText>Filtrar</FilterButtonText>
          </FilterButton>
        </FiltersModalFooter>
      </FiltersModalContainer>
    </RNModal>
  );
};
