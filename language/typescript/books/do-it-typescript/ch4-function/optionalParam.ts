function fn(arg1: string, arg2?: number) {
    console.log('arg2: ' + arg2)
}

fn('seo', 31) // 31
fn('seo')     // undefined