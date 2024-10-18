import { useState, useRef, useMemo, useCallback } from 'react';
import { searchActors } from '../services/actors';

export function useActors({ search }) {
    const [actors, setActors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const previousSearch = useRef(search);

    const getActors = useMemo(() => {
        return async ({ search }) => {
            if (search === previousSearch.current) return;

            try {
                setLoading(true);
                setError(null);
                previousSearch.current = search;
                const newActors = await searchActors({ search });
                setActors(newActors);
            } catch (e) {
                setError(e.message);
            } finally {
                setLoading(false);
            }
        };
    }, []);

    return { actors, getActors, loading, error };
}