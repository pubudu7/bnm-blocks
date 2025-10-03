import { __ } from '@wordpress/i18n';
import { FormTokenField, Spinner } from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { useState, useMemo } from '@wordpress/element';

const MultiPostSelector = ({ selectedPosts = [], setSelectedPosts }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // fetch matching searchResults for suggestions
  const searchResults = useSelect(
    (select) => {
      if (!searchTerm) return [];
      return select('core').getEntityRecords('postType', 'post', {
        search: searchTerm,
        per_page: 10,
      });
    },
    [searchTerm]
  );

  const isLoading = searchTerm && searchResults === undefined;

  // Lookup full post objects for the *already selected IDs*
  const selectedPostObjects = useSelect(
    (select) => {
      if (!selectedPosts || selectedPosts.length === 0) return [];
      return select('core').getEntityRecords('postType', 'post', {
        include: selectedPosts,
        orderby: 'include',
        per_page: selectedPosts.length,
      }); 
    },
    [selectedPosts]
  );

  // suggestion list shown by FormTokenField (strings)
  const suggestions = useMemo(() => {
    if (isLoading) {
      return ['🔄 Loading...']; // fake suggestion for spinner
    }
    if (!Array.isArray(searchResults)) return ['No results'];
    return searchResults.map((p) => p.title.rendered || '(no title)');
  }, [searchResults, isLoading]);

  // Tokens to display (titles for selected IDs)
  const tokenValues = useMemo(() => {
    if (!Array.isArray(selectedPostObjects)) return [];
    return selectedPostObjects.map((p) => p.title.rendered || '(no title)');
  }, [selectedPostObjects]);

  const onChange = (tokens) => {
    if (!Array.isArray(searchResults)) return;
    
    // tokens is an array of strings (order preserved)
    const newIds = tokens.map((token) => {
      // 1) try to match current search results (most likely right after selecting suggestion)
      const fromResults = searchResults.find((p) => p.title.rendered  === token);
      if (fromResults) {
        return fromResults.id;
      }

      // 2) fallback to any existing selected post that matches the token
      const fromExisting = selectedPostObjects.find(
        (p) => p.title.rendered === token
      );
      if (fromExisting) {
        return fromExisting.id;
      }

      // 3) unknown token (user typed a custom token) — keep placeholder so token doesn't vanish
      return null;
    }).filter(Boolean);

    setSelectedPosts(newIds);
  };

  return (
    <div className="thbnm-multi-post-selector">
      <FormTokenField
        label={ __( 'Select Posts', 'bnm-blocks' ) }
        value={tokenValues}
        suggestions={suggestions}
        onInputChange={setSearchTerm}
        onChange={onChange}
      />
      {isLoading && (
        <div className="thbnm-loading-spinner-overlay">
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default MultiPostSelector;