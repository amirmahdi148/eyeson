import { useState, useCallback } from 'react';

interface UseAsyncOperationState<T> {
    data: T | null;
    error: Error | null;
    isPending: boolean;
    isSuccess: boolean;
}

interface UseAsyncOperationOptions<T, E = Error> {
    onSuccess?: (data: T) => void | Promise<void>;
    onError?: (error: E) => void | Promise<void>;
}

export function useAsyncOperation<T = any, E = Error>(
    options?: UseAsyncOperationOptions<T, E>
) {
    const [state, setState] = useState<UseAsyncOperationState<T>>({
        data: null,
        error: null,
        isPending: false,
        isSuccess: false,
    });

    const mutate = useCallback(
        async (asyncFn: () => Promise<T>) => {
            setState({
                data: null,
                error: null,
                isPending: true,
                isSuccess: false,
            });

            try {
                const result = await asyncFn();
                setState({
                    data: result,
                    error: null,
                    isPending: false,
                    isSuccess: true,
                });

                if (options?.onSuccess) {
                    await options.onSuccess(result);
                }

                return result;
            } catch (err) {
                const error = err instanceof Error ? err : new Error(String(err));
                setState({
                    data: null,
                    error,
                    isPending: false,
                    isSuccess: false,
                });

                if (options?.onError) {
                    await options.onError(error as E);
                }

                throw error;
            }
        },
        [options]
    );

    return {
        ...state,
        mutate,
    };
}
