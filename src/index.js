import React, { useState, useRef, useEffect } from 'react';
import css from './styles.module.scss';
import { DownIcon } from './assets/icons';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export const AutoComplete = ({
  className,
  placeholder,
  options,
  onTextChange = () => { },
  onSelect = () => { },
  onFocus = () => { },
  roundedBorder = false,
  darkMode = false,
  downIcon,
  containerId,
  inputId
}) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [clicked, setClicked] = useState(false);

  const autoCompleteRef = useRef();
  const typingTimer = useRef();

  const handleOutsideClick = e => {
    if (!autoCompleteRef.current.contains(e?.target)) {
      setClicked(false);
      setSuggestions([]);
    }
  };

  const handleTextChange = ({ target: { value = '' } }) => {
    let newSuggestions = [];

    if (value.length > 0) {
      newSuggestions = options?.sort()?.filter(option => {
        let word = option + '';
        // return new RegExp(value, 'i').test(word);
        return word.toLowerCase().includes(value.toLowerCase());
      });
    }
    setSuggestions(newSuggestions);
    setValue(value);

    clearTimeout(typingTimer.current);

    typingTimer.current = setTimeout(() => {
      onTextChange(value);
    }, 500);
  };

  const handleSuggestionSelected = (suggestion, index) => {
    setSuggestions([]);
    setValue('');
    onSelect(suggestion, index);
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleOutsideClick, false);
    return () => {
      window.removeEventListener('mousedown', handleOutsideClick, false);
    };
  }, []); //eslint-disable-line

  useEffect(() => {
    setSuggestions(options);
  }, [options]);

  return (
    <div
      ref={autoCompleteRef}
      className={classNames(css.Autocomplete_AutoCompleteTis, {
        [css.Dark_AutoCompleteTis]: darkMode
      }, className)}
      id={containerId}
    >
      <input
        className={classNames(css.Input_AutoCompleteTis, {
          [css.RoundedBorder_AutoCompleteTis]: roundedBorder,
          [css.Dark_AutoCompleteTis]: darkMode
        })}
        placeholder={placeholder}
        type='text'
        value={value}
        onChange={handleTextChange}
        onFocus={() => {
          setClicked(true);
          setSuggestions(options);
          onFocus();
        }}
        id={inputId}
      />
      {downIcon || <DownIcon />}
      <ul>
        {clicked && suggestions?.map((suggestion, index) => (
          <li
            key={suggestion + index}
            onClick={() => handleSuggestionSelected(suggestion, index)}
          >
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

AutoComplete.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.any),
  onTextChange: PropTypes.func,
  onSelect: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  roundedBorder: PropTypes.bool,
  darkMode: PropTypes.bool,
  downIcon: PropTypes.object,
  containerId: PropTypes.string,
  inputId: PropTypes.string,
};